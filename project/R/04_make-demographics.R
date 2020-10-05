library(here)
library(tidyverse)
library(lubridate)

# read and clean data
data <- read_rds(here::here("02_data", "02_cleaned-data", "semphon_data.rds")) %>%
  filter(consent == 1, progress > 90, sender == "trial_screen") %>% 
  group_by(random_id) %>% 
  summarise(
    random_id = unique(random_id),
    gender = unique(demographics_gender),
    year_of_birth = unique(demographics_year),
    month_of_birth = unique(demographics_month)
  ) %>% 
  rowwise() %>% 
  mutate(
    date_today = lubridate::today(),
    birth_date = paste(
      year_of_birth, 
      match(month_of_birth, month.name), 
      "01", # assumes everyone born on 1st
      sep = "-"
    ),
    age = interval(birth_date, date_today)/duration(num = 1, units = "years")
  )

write_csv(data, here::here("02_data", "02_cleaned-data", "demographics.csv"))