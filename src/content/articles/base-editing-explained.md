---
title: "Editing a Single Letter of DNA"
subtitle: "How base editing rewrites the genome without cutting it"
authors: [avery-sample]
editors: [dylan]
section: biology-and-medicine
issue: issue-1
publishDate: 2027-01-22
abstract: "CRISPR made gene editing famous, but the tool most likely to reach patients first may be its quieter cousin. Base editing changes one DNA letter at a time without breaking the double helix."
coverImage: ../../images/covers/base-editing-explained.svg
coverCredit: "Illustration: The Berkeley Carroll Science Journal"
tags: [sample, genetics, CRISPR]
sources:
  - label: "Komor et al., Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage (Nature, 2016)"
    url: "https://www.nature.com/articles/nature17946"
  - label: "NIH National Human Genome Research Institute: What is CRISPR?"
    url: "https://www.genome.gov/about-genomics/policy-issues/what-is-genome-editing"
  - label: "Wikipedia: Base editing"
    url: "https://en.wikipedia.org/wiki/Base_editing"
---

*Sample article for site testing; replace before launch.*

When people say "CRISPR," they usually mean a pair of molecular scissors. A guide RNA finds a matching stretch of DNA, and the Cas9 protein cuts both strands. The cell then patches the break, and if you are lucky, the patch includes the change you wanted. It works, and it has already been used to treat sickle cell disease. But the cut is the problem. A double-strand break is an emergency for a cell, and the repair is messy. Sometimes the cell deletes a few extra letters. Sometimes it rearranges a chromosome. For a disease caused by a single wrong letter, which describes thousands of inherited conditions, breaking the DNA to fix one letter is a little like demolishing a wall to fix a typo on a poster.

Base editing is the alternative that a group led by David Liu at Harvard and the Broad Institute published in 2016. The idea is to keep the part of CRISPR that finds the address and throw away the part that cuts.

## The parts

A base editor has three pieces bolted together.

- A disabled Cas9. Its guide RNA still homes in on a chosen sequence, but the protein has been mutated so it can only nick one strand, or cannot cut at all. It acts as a delivery vehicle.
- A deaminase enzyme. This is the chemistry. A deaminase strips an amino group off a DNA base, which changes what the base looks like to the cell's copying machinery.
- A small protein that blocks the cell's usual repair of that change, so the edit sticks.

When the disabled Cas9 lands on its target, it pries the two DNA strands apart in a small window a few letters wide. The deaminase reaches in and chemically converts one base in that window. The first base editors converted cytosine to something the cell reads as thymine, a C to a T. A second family, published a year later, converts adenine to something read as guanine, an A to a G. Between the two, base editors can make four of the twelve possible single-letter changes, and those four happen to cover a large share of known disease-causing mutations.

> The cut was never the point of CRISPR. The address was.

## Why it matters for medicine

A single-letter change is exactly what many inherited diseases are. Sickle cell disease comes from one A-to-T swap in the gene for hemoglobin. Progeria, the rapid-aging condition, comes from a single C-to-T change. In 2021, a base editor was used in mice with the progeria mutation and extended their lifespan; the same year, the first base-editing trial in humans began, targeting a cholesterol gene in the liver. In late 2022, doctors in London used base-edited donor immune cells to treat a teenager with leukemia that had resisted every other therapy.

None of this means base editing is finished. The editing window is small but not perfectly precise, so a neighboring C or A can sometimes get changed too, which researchers call bystander editing. The deaminase can also occasionally act on RNA or on DNA far from the target. Newer versions have narrowed the window and reduced off-target activity, but every therapy still has to prove its safety in trials, one disease at a time.

## What the next tool looks like

In 2019 the same lab published prime editing, which uses a reverse transcriptase to write a short new sequence directly into the DNA, again without a double-strand break. Prime editing can in principle make any single-letter change plus small insertions and deletions. It is less efficient than base editing for the changes both can make, so the two are likely to coexist: base editing when the target is one of its four swaps, prime editing for the rest.

The larger lesson is about how tools mature. CRISPR's first version was dramatic and blunt. The versions reaching patients are quieter and more careful, and they got there by taking the original idea apart and keeping only the piece that mattered.

## How to read the next headline

When you see a news story about a "CRISPR cure," it is worth asking which tool was actually used. The first approved CRISPR therapy for sickle cell disease uses the cutting version, and it works by disabling a gene rather than correcting one; the cut turns on a backup form of hemoglobin the body normally switches off after birth. A base-editing therapy for the same disease, now in trials, instead changes the sickle mutation into a harmless variant found in some healthy people. Both are called CRISPR. They are different machines with different risks, and the difference is exactly the one this article is about: whether the DNA was broken or rewritten. Learning to ask that question is most of what it takes to follow the field.

