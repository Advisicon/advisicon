# Need devtools
## Install devtools release version
### install.packages("devtools")
## Update devtools to latest version
### devtools::install_github("hadley/devtools")

require(devtools)

# Need ggplot2
## Install latest released version (development version: install_github("hadley/ggplot2"))
### install.packages("ggplot2")

require(ggplot2)

# Need XLConnect
## Install master branch of XLConnect
### install_github("xlconnect", username = "miraisolutions", ref = "master")

require(XLConnect)

# Load data
excel.file <- file.path("~/Downloads/content-audit.xlsx")
data <- readWorksheetFromFile(excel.file, sheet="Advisicon")

# ###########################################################################

# Create slice
dslice <- data[c("Flesch.Kincaid.Reading.Ease", "bounce.rate", "Avg..Time.on.Page")]

# Replace 0 datetime value with NA
dslice[dslice=="1899-12-31 00:00:00"] <- NA
# Remove all rows with NA data
dslice <- dslice[rowSums(is.na(dslice)) == 0,]

# Create graph: Effect of Readability on Bounce Rate
pdf("effect-of-readability-on-bounce-rate.pdf")
plot(dslice$Flesch.Kincaid.Reading.Ease, dslice$bounce.rate, 
  pch=20, 
  ylab="Bounce Rate", 
  xlab="Flesch Kincaid Reading Ease", 
  main="Effect of Readability on Bounce Rate", 
  col=rgb(0,0,0,0.25),
  cex=1.5,
  yaxt="n"
)
axis(
  2,
  at=pretty(dslice$bounce.rate),
  lab=paste0(pretty(dslice$bounce.rate) * 100, "%"),
  las=TRUE
)
abline(lm(dslice$bounce.rate ~ dslice$Flesch.Kincaid.Reading.Ease),
  col=rgb(1,0,0,0.5))
dev.off()

# ---------------------------------------------------------------------------

# Create slice
dslice <- data[c("Flesch.Kincaid.Reading.Ease", "Avg..Time.on.Page")]

# Replace 0 datetime value with NA
dslice[dslice=="1899-12-31 00:00:00"] <- NA
# Remove all rows with NA data
dslice <- dslice[rowSums(is.na(dslice)) == 0,]

# Create graph: Effect of Readability on Page Visit Length
pdf("effect-of-readability-on-page-visit-length.pdf")
plot(dslice$Flesch.Kincaid.Reading.Ease, dslice$Avg..Time.on.Page, 
  pch=20, 
  ylab="Avg. Time on Page", 
  xlab="Flesch Kincaid Reading Ease", 
  main="Effect of Readability on Page Visit Length", 
  col=rgb(0,0,0,0.25),
  cex=1.5)
abline(lm(dslice$Avg..Time.on.Page ~ dslice$Flesch.Kincaid.Reading.Ease), 
  col=rgb(1,0,0,0.5))
dev.off()

# ---------------------------------------------------------------------------

# Create graph: Effect of Readability on Page Visit Length
pdf("effect-of-cta-no-on-bounce-rate.pdf")
plot(data$cta.count, data$bounce.rate, 
  pch=20,
  xlab="# of CTAs",
  ylab="Bounce Rate",
  main="Effect of CTA # on Bounce Rate",
  yaxt="n",
  type="n",
  cex=.5,
  bty="n"
)
dslice <- data[c("cta.count", "bounce.rate", "Avg..Time.on.Page")]
dslice[dslice=="1899-12-31 00:00:00"] <- NA
dslice <- dslice[rowSums(is.na(dslice)) == 0,]
dslice.sum <- aggregate(dslice$bounce.rate, by=list(dslice$cta.count), FUN=mean)
axis(
  2,
  at=pretty(dslice$bounce.rate),
  lab=paste0(pretty(dslice$bounce.rate) * 100, "%"),
  las=TRUE,
  col=rgb(.125,.125,.125,1)
)
polygon(
  c(0,dslice.sum$Group.1, tail(dslice.sum$Group.1, n=1)), 
  c(0, dslice.sum$x, 0),
  col=rgb(.125,.125,.125,1),
  border=NA
)
dev.off()

# ---------------------------------------------------------------------------

# Create graph: Distribution of Flesch Kincaid Reading Ease for Advisicon Content
pdf("flesch-kincaid-reading-ease-distribution.pdf")
hist(data$Flesch.Kincaid.Reading.Ease,
  main="Distribution of Flesch Kincaid Reading Ease for Advisicon Content",
  xlab="Flesch Kincaid Reading Ease",
  breaks=24)
boxplot(data$Flesch.Kincaid.Reading.Ease,
  horizontal=TRUE,
  at=59,
  add=TRUE,
  axes=FALSE)
dev.off()

# ---------------------------------------------------------------------------

# Create graph: Density of Page Value
pdf("page-value-density.pdf")
hist(data$page.value, 
  breaks=15, 
  freq=FALSE, 
  xlab="Page Value ($)", 
  main="Density of Page Value for Advisicon Content")
dev.off()

# ---------------------------------------------------------------------------

# Create graph: Effect of the Number of CTAs on Unique Pageviews

dslice <- data[c("cta.count", "Unique.Pageviews", "Avg..Time.on.Page")]
dslice[dslice=="1899-12-31 00:00:00"] <- NA
dslice <- dslice[rowSums(is.na(dslice)) == 0,]
dslice.sum <- aggregate(dslice$Unique.Pageviews, by=list(dslice$cta.count), FUN=mean)

pdf("effect-of-cta-number-on-unique-pageviews.pdf")
plot(dslice.sum,
  type="l",
  ylab="Unique Pageviews",
  xlab="Number of CTAs",
  main="Effect of the Number of CTAs on Unique Pageviews",
  bty="n")
dev.off()

# ---------------------------------------------------------------------------

# Create graph: Effect of the Number of Unique Images and Media on Bounce Rate and Exit Percent

pdf("effect-of-widget-number-on-bounce-and-exit.pdf")
dslice <- data[c("unique.images..media..documents", "bounce.rate", "exit..", "Avg..Time.on.Page")]
dslice[dslice=="1899-12-31 00:00:00"] <- NA
dslice <- dslice[rowSums(is.na(dslice)) == 0,]
dslice <- dslice[c("unique.images..media..documents", "bounce.rate", "exit..")]
dslice.bounce <- aggregate(
  dslice$bounce.rate, by=list(dslice$unique.images..media..documents), FUN=mean
)
dslice.exit <- aggregate(
  dslice$exit.., by=list(dslice$unique.images..media..documents), FUN=mean
)

plot(dslice$unique.images..media..documents, 
  dslice$bounce.rate * 100, 
  pch=20, 
  ylab="",
  xlab="Number of Unique Images, Media, Documents, etc. in Content",
  main="Effect of Widget # on Bounce and Exit", 
  cex=0.5, 
  yaxt="n",
  type="n",
  bty="n"
)
axis(2, 
  at=pretty(dslice$bounce.rate * 100), 
  lab=paste0(pretty(dslice$bounce.rate) * 100, "%"),
  las=TRUE
)
points(dslice$unique.images..media..documents, dslice$bounce.rate * 100, cex=0.5, col=rgb(0.75,0,0,0.125))
points(dslice$unique.images..media..documents, dslice$exit.. * 100, cex=0.5, col=rgb(0,0,0.75,0.125))
lines(dslice.bounce$Group.1, dslice.bounce$x * 100, type="l", lwd=2, col=rgb(0.9,0,0,0.5))
lines(dslice.exit$Group.1, dslice.exit$x * 100, type="l", lwd=2, col=rgb(0,0,0.9,0.5))
legend(
  50, 100, c("bounce rate", "exit %"), cex=0.8, col=c(rgb(0.9,0,0,0.5), rgb(0,0,0.9,0.5)),
  lty=1
)
dev.off()

# ---------------------------------------------------------------------------

dslice <- data[c("page.value", "bounce.rate", "exit..", "Avg..Time.on.Page")]
dslice[dslice=="1899-12-31 00:00:00"] <- NA
dslice <- dslice[rowSums(is.na(dslice)) == 0,]

# Create graph: Effect of Page Value on Bounce Rate and Exit %
pdf("effect-of-page-value-on-bounce-and-exit.pdf")
plot(dslice$page.value, dslice$bounce.rate,
  pch=20,
  cex=0.5,
  type="n",
  bty="n",
  yaxt="n",
  xaxt="n",
  xlab="Page Value",
  ylab="",
  main="Effect of Page Value on Bounce Rate and Exit %"
)
axis(
  2, 
  at=pretty(dslice$bounce.rate), 
  lab=paste0(pretty(dslice$bounce.rate) * 100, "%"), 
  las=TRUE
)
axis(
  1,
  at=pretty(dslice$page.value),
  lab=paste0("$", pretty(dslice$page.value))
)
dslice.sort.value <- sort(dslice$page.value, decreasing=FALSE)
polygon(
  c(0, dslice.sort.value, tail(dslice.sort.value, n=1)), 
  c(0, dslice$bounce.rate, 0),  
  col=rgb(.9,0,0,.25), 
  border=NA
)
polygon(
  c(0, dslice.sort.value, tail(dslice.sort.value, n=1)), 
  c(0, dslice$exit.., 0),  
  col=rgb(0,0,.9,.25), 
  border=NA
)
legend(
  tail(dslice.sort.value, n=1) - 1, 
  tail(sort(dslice$bounce.rate, decreasing=FALSE), n=1), 
  c("Bounce Rate", "Exit %"), 
  cex=0.8, 
  fill=c(rgb(.9,0,0,.25), rgb(0,0,.9,.25)),
  border=NA,
  bty="n"
)
dev.off()


# ###########################################################################

# Clean up
rm('data')
rm('dslice')
rm('dslice.sum')
rm('dslice.bounce')
rm('dslice.exit')
rm('dslice.sort.value')
