library(here)
library(tidyverse)
library(mousetrap)

# read and clean data
data <- read_rds(here("02_data", "02_cleaned-data", "semphon_data.rds")) %>%
  mutate(
    # adjust target location as they are flipped in lab.js
    target_loc = case_when(
      w1_x == -225 & w1_y == -150 ~ "bottom_right",
      w1_x == 225 & w1_y == -150 ~ "bottom_left",
      w1_x == -225 & w1_y == 150 ~ "top_right",
      w1_x == 225 & w1_y == 150 ~ "top_left"
    )
  ) %>% 
  # keep only data from the trial screen and correct responses
  filter(sender == "trial_screen", correct == 1)

# import mousetrap data
# Problem: must remap trajectories to same space. 
# mt_remap_symmetric() and mt_align_start_end() don't give expected results.
raw_mt <- mt_import_mousetrap(data)

# (attempt) to align trajectories
remap_mt <- mt_remap_symmetric(raw_mt) # remap trajectories to one side of the coordinate system.
aligned_mt <- mt_align_start(remap_mt) # space normalization (share initial coordinate)
normalised_mt <- mt_time_normalize(aligned_mt)

# get measures
mt_measures <- mt_measures(normalised_mt)

# make plot
mt_plot_aggregate(
  mt_measures,
  use="tn_trajectories",
  x="xpos", 
  y="ypos", 
  color="condition",
  subject_id="random_id",
  facet_col = "target_loc"
)

# save data together
mt_data <- merge(mt_measures$data, mt_measures$measures, by = "mt_id")

# aggregate data
mt_agg <- mt_aggregate(
  mt_measures, 
  use="measures",
  use2_variables=c("random_id", "condition")
)

write_csv(mt_agg, here("02_data", "02_cleaned-data", "by_subj_semphon_mt.csv"))