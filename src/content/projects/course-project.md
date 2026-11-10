---
title: Predicting late library returns
summary: A class project modeling which loans would come back late, and the surprisingly simple rule that beat the model.
year: 2025
role: Team of three, modeling and write-up
order: 3
---

## The problem

Our university library wanted to know which loans were likely to be returned late, so they
could send reminders earlier.

## What I did

- Cleaned two years of anonymized loan records (about 40,000 rows).
- Compared a logistic regression against a gradient-boosted model.
- Wrote up the findings for library staff with no statistics background.

## The result

The boosted model was more accurate on paper, but a one-line rule (loans checked out in the
last week of term) caught most late returns and was easy for staff to act on. We recommended
the rule, and the library adopted it.
