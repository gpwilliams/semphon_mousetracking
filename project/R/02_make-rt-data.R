library(here)
library(tidyverse)

# read data
data <- read_rds(here("02_data", "01_cleaned_data", "semphon_data.rds"))

# by-subjects data ----

by_subj <- data %>% 
  # some didn't click finish hence, 91%
  filter(consent == 1, progress > 90, sender == "trial_screen") %>% 
  mutate(correct = case_when(correct == TRUE ~ 1, correct == FALSE ~ 0)) %>% 
  drop_na(correct) %>% 
  group_by(random_id, condition) %>% 
  summarise(
    sum_correct = sum(correct),
    mean_rt = mean(response_time_after_onset),
    sd_rt = sd(response_time_after_onset),
    n = length(correct)
  )

# make data wide format
by_subj_wide <- by_subj %>% 
  pivot_wider(
    names_from = condition,
    values_from = c(mean_rt, sd_rt, sum_correct, n)
  )

# simulate new data due to low sample size ----

# first, fit linear model to real data
model <- lm(mean_rt ~ condition, data = by_subj)

# simulate new data based on model coefficients
# nsim = 9, add to real data = 110 responses.
by_subj$data_type <- "real"
output_dat <- by_subj
for(i in 1:9) {
  new_dat <- by_subj
  new_dat$random_id <- NULL
  new_dat$data_type <- "simulation"
  new_dat$sim_num <- i
  sim_rt <- simulate(model, nsim = 1, seed = 1)
  new_dat$mean_rt <- sim_rt$sim_1
  output_dat <- bind_rows(output_dat, new_dat)
}
n_subj <- nrow(output_dat)/4
output_dat$new_id <- sort(rep(1:n_subj, 4)) # by conditions
output_dat <- output_dat %>% 
  select(random_id, new_id, data_type, sim_num, everything())

# make simulated data wide format
output_dat_wide <- output_dat %>% 
  pivot_wider(
    names_from = condition,
    values_from = c(mean_rt, sd_rt, sum_correct, n)
  )

# save data
write_csv(by_subj_wide, here("02_data", "02_cleaned-data", "by_subj_semphon_wide.csv"))
write_csv(by_subj, here("02_data", "02_cleaned-data", "by_subj_semphon.csv"))
write_csv(output_dat, here("02_data", "02_cleaned-data", "by_subj_semphon_sim.csv"))
write_csv(output_dat_wide, here("02_data", "02_cleaned-data", "by_subj_semphon_wide_sim.csv"))
