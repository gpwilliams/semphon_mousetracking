library(here)
library(tidyverse)
library(jsonlite)
library(janitor)

# load raw data
data_raw <- read_csv(
    here(
      "02_data",
      "01_raw-data", 
      "anonymised_raw_data.csv"
    )
  ) %>% 
  slice(3:n()) %>% 
  type_convert() %>% 
  clean_names() %>% 
  mutate(
    consent = case_when(
      consent_1 == "Yes" & consent_2 == "Yes" & consent_3 == "Yes" 
      & consent_4 == "Yes" & consent_5 == "Yes" & consent_6 == "Yes"
      & consent_7 == "Yes" & consent_8 == "Yes" & consent_9 == "Yes"~ 1,
      TRUE ~ 0
    )
  ) %>% 
  select(-c(
    consent_1:consent_9,
    status,
    distribution_channel,
    contains("recipient"),
    contains("meta"),
    contains("create_new_field"),
    contains("location")
  )) %>% 
  select(
    response_id, 
    random_id,
    consent,
    device,
    start_date,
    end_date,
    recorded_date,
    everything()
  )
  
# Get label for JSON data from lab.js
labjs_column <- 'labjs_data'

# Unpack the JSON data and discard the compressed version
data <- data_raw %>%
  # Provide a fallback for missing data
  mutate(!!labjs_column := recode(.[[labjs_column]], .missing='[{}]')) %>%
  # Expand JSON-encoded data per participant
  group_by_all() %>%
  do(fromJSON(.[[labjs_column]], flatten=TRUE)) %>%
  ungroup() %>%
  # Remove column containing raw JSON
  select(-matches(labjs_column)) %>% 
  clean_names() %>% 
  select(-c(x21)) %>% 
  type_convert() %>% 
  # make RTs within trial, also adjusted for word onset
  mutate(
    trial_length = time_end - time_show,
    response_time_within_trial = response_timestamp - time_show,
    response_time_after_onset = response_time_within_trial - word_onset
  )

# save data to file
write_rds(
  data, 
  here(
    "02_data", 
    "02_cleaned-data", 
    "semphon_data.rds"
  )
)
