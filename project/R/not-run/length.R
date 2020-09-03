#lengths.
library(tuneR)

f <- dir()[grep(".mp3", dir())]

df1 <- data.frame()
for(ii in f) {
  mp3_1 <- readMP3(ii)
  df1 <- rbind(df1, cbind(ii, round(length(mp3_1)/mp3_1@samp.rate*1000, digits=0)))
}

write.csv(df1, file="lengths.csv")