# semphon_mousetracking

- materials/study_info.csv: contains the list of items used in this study.
Note that in the experiment the columns from **Item** to **audio_timeout** contain information on the items. 

    - The columns **word_loc** to **w4_y** contain information corresponding to the presentation of these items on screen. 

    - The columns ending in **_x** and **_y** indicate where on screen to draw the words and whether the areas of interest are drawn around these words. These items are given an index denoting which of the 24 possible permutations of all word locations these words appear. These columns are prefixed indicating which x and y locations are given to which words in the table (e.g. word_1 receives x and y coordinates from w1_x and w1_y respectively).

    These two sets of columns are independently shuffled, such that across participants the order of presentation for items varies and the locations of the words on screen within these items varies.

    Trials automatically end on audio_timeout, which is the offset of the audio + 4000ms.
