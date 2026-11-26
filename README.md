# Night-Shift Foghorn Tester, Desert Lighthouse

[![make.fun](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/competitions/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/1touhou/weirdest-job-title/rank.svg)](https://make.fun/competitions/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/1touhou/weirdest-job-title/reward.svg)](https://make.fun/competitions/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

Entry for the [Weirdest Job Title: Blind Judge Showdown](https://make.fun/competitions/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922) on make.fun.

## The entry

> **Night-Shift Foghorn Tester, Desert Lighthouse**

One job title, 45 characters, and nothing else.

## Why it is weird

Every word of it sounds like a real job posting. Foghorn tester is a
plausible maritime safety role; night shift is the shift nobody wants;
a lighthouse is a place that genuinely employs people. Then the twist
lands: the lighthouse is in the desert. There is no sea, no fog, and no
ship to warn — so the tester spends every night making sure a horn that
can never help anyone is in perfect working order, in a place where the
only thing listening is sand.

## How it works

`main.ts` (Node 22, standard library only) writes the title — exactly,
with no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output`), creating the directory if needed. A blank
`MAKEFUN_OUTPUT_DIR` falls back to `/output`. A built-in gate refuses
to write anything if the title is not 1–60 characters, exiting
non-zero so a bad entry fails loudly instead of being scored invalid.

Run it:

```sh
node main.ts
```
