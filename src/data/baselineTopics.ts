export interface Subtopic {
  id: string;
  name: string;
  description: string;
}

export interface BaselineTopic {
  id: string;
  name: string;
  description: string;
  subtopics: Subtopic[];
}

export const baselineTopics: BaselineTopic[] = [
  {
    id: "algebra-linear",
    name: "Algebra: Linear Equations",
    description: "Solve equations in one or more steps, with brackets and fractions.",
    subtopics: [
      { id: "one-step", name: "One-step equations", description: "Equations like x + a = b" },
      { id: "two-step", name: "Two-step equations", description: "Equations like 2x - a = b" },
      { id: "brackets", name: "Equations with brackets", description: "e.g., 3(x - 2) = 12" },
      { id: "fractions", name: "Equations with fractions", description: "e.g., x/3 + 4 = 10" }
    ]
  },
  {
    id: "algebra-quadratic",
    name: "Algebra: Quadratic Expressions",
    description: "Expand, factorise, and solve quadratic equations.",
    subtopics: [
      { id: "expanding", name: "Expanding brackets", description: "Multiply out two brackets" },
      { id: "factorising", name: "Factorising quadratics", description: "Write as (x+a)(x+b)" },
      { id: "solving", name: "Solving quadratics", description: "Find values of x" },
      { id: "completesquare", name: "Completing the square", description: "Write as (x+p)² + q" }
    ]
  },
  {
    id: "geometry-angles",
    name: "Geometry: Angles & Shapes",
    description: "Angle facts, polygons, parallel lines, and reasoning.",
    subtopics: [
      { id: "triangle", name: "Angles in triangles", description: "Sum 180°, base/vertex facts" },
      { id: "quadrilateral", name: "Angles in quadrilaterals", description: "Sum 360°, special cases" },
      { id: "parallel", name: "Parallel line rules", description: "Alternate, corresponding, interior" }
    ]
  },
  {
    id: "geometry-pythagoras",
    name: "Geometry: Pythagoras’ Theorem",
    description: "Find missing side using a² + b² = c².",
    subtopics: [
      { id: "hypotenuse", name: "Finding hypotenuse", description: "Given two legs" },
      { id: "leg", name: "Finding a leg", description: "Given hypotenuse & one leg" },
      { id: "real", name: "Real-world problems", description: "Ladders, ramps, distances" }
    ]
  },
  {
    id: "probability",
    name: "Probability",
    description: "Theoretical and experimental probability, including combined events.",
    subtopics: [
      { id: "basic", name: "Basic probability", description: "Simple outcomes" },
      { id: "combined", name: "Combined events", description: "Two-step problems" }
    ]
  },
  {
    id: "statistics",
    name: "Statistics & Data Handling",
    description: "Averages, range, charts, and interpreting data.",
    subtopics: [
      { id: "averages", name: "Averages & range", description: "Mean, median, mode, range" },
      { id: "charts", name: "Charts & graphs", description: "Bar, pie, line graphs" }
    ]
  },
  {
    id: "ratio",
    name: "Ratio & Proportion",
    description: "Sharing amounts, scaling, and proportions in context.",
    subtopics: [
      { id: "share", name: "Sharing in ratios", description: "Divide into parts" },
      { id: "scale", name: "Scaling & conversion", description: "Map scales, models" }
    ]
  },
  {
    id: "fractions",
    name: "Fractions, Decimals & Percentages",
    description: "Conversions, calculations, and percentage change.",
    subtopics: [
      { id: "addsub", name: "Adding & subtracting fractions", description: "Same and different denominators" },
      { id: "multdiv", name: "Multiplying & dividing fractions", description: "Simple and mixed numbers" },
      { id: "percents", name: "Percentages", description: "Percentage change, increase/decrease" }
    ]
  },
  {
    id: "sequences",
    name: "Sequences & Patterns",
    description: "Term-to-term and position-to-term rules, nth term, special sequences.",
    subtopics: [
      { id: "linear", name: "Linear sequences", description: "Constant difference" },
      { id: "nth", name: "Nth term", description: "Formula for any term" },
      { id: "fibonacci", name: "Fibonacci & specials", description: "Sum of previous terms" }
    ]
  },
  {
    id: "transformations",
    name: "Transformations",
    description: "Reflections, rotations, translations, and enlargements.",
    subtopics: [
      { id: "reflection", name: "Reflections", description: "Across x and y axes" },
      { id: "rotation", name: "Rotations", description: "90°, 180°, 270°" },
      { id: "translation", name: "Translations", description: "Moving by vectors" },
      { id: "scale", name: "Enlargements", description: "Positive and negative scale factors" }
    ]
  },
  {
    id: "simultaneous",
    name: "Simultaneous Equations",
    description: "Solving by substitution and elimination.",
    subtopics: [
      { id: "elimination", name: "Elimination method", description: "Add/subtract equations" },
      { id: "substitution", name: "Substitution method", description: "Replace one variable" }
    ]
  },
  {
    id: "inequalities",
    name: "Inequalities",
    description: "Solving and representing inequalities on number lines.",
    subtopics: [
      { id: "simple", name: "Simple inequalities", description: "Basic solve steps" },
      { id: "reversal", name: "Reversing inequality", description: "Multiply/divide by negative" }
    ]
  }
];