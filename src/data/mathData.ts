export interface Exercise {
  id: string;
  question: string;
  answer: string;
  explanation: string;
  marks: number;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  topicId: string;
  difficulty: "Easy" | "Medium" | "Hard";
  dueDate: string;
  exercises: Exercise[];
}

export interface Topic {
  id: string;
  name: string;
  description: string;
}

export const topics: Topic[] = [
  { id: "algebra-linear", name: "Algebra: Linear Equations", description: "Solving equations involving one or more steps, including brackets and fractions." },
  { id: "algebra-quadratic", name: "Algebra: Quadratic Expressions", description: "Expanding, factorising, and solving quadratic equations." },
  { id: "geometry-angles", name: "Geometry: Angles & Shapes", description: "Angle facts, polygons, parallel lines, and reasoning." },
  { id: "geometry-pythagoras", name: "Geometry: Pythagoras’ Theorem", description: "Finding side lengths and solving real-life problems using Pythagoras." },
  { id: "probability", name: "Probability", description: "Theoretical and experimental probability, including combined events." },
  { id: "statistics", name: "Statistics & Data Handling", description: "Averages, range, charts, and interpreting data." },
  { id: "ratio", name: "Ratio & Proportion", description: "Sharing amounts, scaling, and proportions in context." },
  { id: "fractions", name: "Fractions, Decimals & Percentages", description: "Conversions, calculations, and percentage change." },
  { id: "sequences", name: "Sequences & Patterns", description: "Term-to-term and position-to-term rules, nth term, and special sequences." },
  { id: "transformations", name: "Transformations", description: "Reflections, rotations, translations, and enlargements." },
  { id: "simultaneous", name: "Simultaneous Equations", description: "Solving by substitution and elimination." },
  { id: "inequalities", name: "Inequalities", description: "Solving and representing inequalities on number lines." }
];

const questionBank: Record<string, Exercise[]> = {
  "algebra-linear": [
    { id: "q1", question: "Rearrange and solve: 12 = 4x + 8", answer: "1", explanation: "Subtract 8: 4 = 4x, divide by 4 to get x = 1.", marks: 2 },
    { id: "q2", question: "Solve 4(x - 3) = 20", answer: "8", explanation: "Divide by 4: x - 3 = 5, add 3 → x = 8.", marks: 2 },
    { id: "q3", question: "Solve for y: 14 - y = 9", answer: "5", explanation: "Subtract 14: -y = -5, multiply by -1 → y = 5.", marks: 2 },
    { id: "q4", question: "Solve for y: 5y - 8 = 2", answer: "2", explanation: "Add 8: 5y = 10, divide by 5 → y = 2.", marks: 2 },
    { id: "q5", question: "Find the value of x: 9x = 45", answer: "5", explanation: "Divide both sides by 9 → x = 5.", marks: 2 },
    { id: "q6", question: "If 5x + 3 = 28, find x.", answer: "5", explanation: "Subtract 3: 5x = 25, divide by 5 → x = 5.", marks: 2 },
    { id: "q7", question: "Solve for x: 3x + 7 = 16", answer: "3", explanation: "Subtract 7: 3x = 9, divide by 3 → x = 3.", marks: 2 },
    { id: "q8", question: "Solve for x: 7x - 4 = 17", answer: "3", explanation: "Add 4: 7x = 21, divide by 7 → x = 3.", marks: 2 }
  ],
  "algebra-quadratic": [
    { id: "q1", question: "Factorise: x² + 5x + 6", answer: "(x+2)(x+3)", explanation: "Find factors of 6 adding to 5 → 2 and 3.", marks: 2 },
    { id: "q2", question: "Solve: x² - 9 = 0", answer: "x = ±3", explanation: "Add 9: x² = 9 → x = ±3.", marks: 2 },
    { id: "q3", question: "Solve: x² + 7x + 10 = 0", answer: "x = -5 or -2", explanation: "Factors: (x+5)(x+2)=0.", marks: 2 },
    { id: "q4", question: "Expand: (x + 4)(x - 2)", answer: "x² + 2x - 8", explanation: "Multiply each term and collect.", marks: 2 },
    { id: "q5", question: "Roots of: x² + 3x - 18 = 0", answer: "x = 3 or -6", explanation: "Factors: (x-3)(x+6)=0.", marks: 2 },
    { id: "q6", question: "Complete the square: x² + 6x + 5", answer: "(x+3)² - 4", explanation: "Half of 6 is 3, square is 9, adjust constant.", marks: 2 },
    { id: "q7", question: "Solve: 2x² - 8x = 0", answer: "x = 0 or 4", explanation: "Factorise: 2x(x-4)=0.", marks: 2 },
    { id: "q8", question: "Factorise: x² - 4x - 5", answer: "(x-5)(x+1)", explanation: "Product -5, sum -4 → -5 and 1.", marks: 2 }
  ],
  "geometry-angles": [
    { id: "q1", question: "Triangle with angles 65° and 45° → missing angle", answer: "70", explanation: "180° - (65 + 45) = 70°.", marks: 2 },
    { id: "q2", question: "Angles on straight line ratio 2:3", answer: "72° and 108°", explanation: "Sum 180°, divide in ratio 2:3.", marks: 2 },
    { id: "q3", question: "Sum of a quadrilateral's angles", answer: "360", explanation: "Always 360°.", marks: 2 },
    { id: "q4", question: "Interior angle of regular pentagon", answer: "108", explanation: "(5-2)×180÷5.", marks: 2 },
    { id: "q5", question: "Corresponding angles in parallel lines are...", answer: "Equal", explanation: "They match exactly in size.", marks: 2 },
    { id: "q6", question: "Isosceles triangle base angles 70° → vertex angle", answer: "40", explanation: "180° - 140° = 40°.", marks: 2 },
    { id: "q7", question: "Complementary angles: one is 35°", answer: "55", explanation: "Sum 90° → 90 - 35° = 55°.", marks: 2 },
    { id: "q8", question: "Exterior angle 125°, opposite inside 55° → other inside?", answer: "70", explanation: "Exterior = sum of two opposite interior angles.", marks: 2 }
  ],
  "geometry-pythagoras": [
    { id: "q1", question: "Legs 7cm, 24cm → hypotenuse", answer: "25", explanation: "√(49+576)=25.", marks: 2 },
    { id: "q2", question: "Hypotenuse 13cm, one leg 5cm → other leg", answer: "12", explanation: "√(169-25)=12.", marks: 2 },
    { id: "q3", question: "Ladder 9m up, 12m out → length", answer: "15", explanation: "√(81+144)=15.", marks: 2 },
    { id: "q4", question: "Square diag 10cm → side", answer: "7.07", explanation: "side=10/√2.", marks: 2 },
    { id: "q5", question: "Legs 8cm, 15cm → hypotenuse", answer: "17", explanation: "√(64+225)=17.", marks: 2 },
    { id: "q6", question: "Ramp 4m, height 2.5m → base", answer: "3.12", explanation: "√(16-6.25)≈3.12.", marks: 2 },
    { id: "q7", question: "Hypotenuse 20, leg 12 → other leg", answer: "16", explanation: "√(400-144)=16.", marks: 2 },
    { id: "q8", question: "Slope rise 5m, base 3m → length", answer: "5.83", explanation: "√(25+9)≈5.83.", marks: 2 }
  ],
  "probability": [
    { id: "q1", question: "Bag: 3 red, 2 blue. P(red)?", answer: "3/5", explanation: "Red outcomes / total = 3/5.", marks: 2 },
    { id: "q2", question: "Die roll: P(even)?", answer: "1/2", explanation: "3 even numbers out of 6.", marks: 2 },
    { id: "q3", question: "Coin flip twice: P(2 heads)?", answer: "1/4", explanation: "HH only out of 4 outcomes.", marks: 2 },
    { id: "q4", question: "Deck: P(Ace)?", answer: "1/13", explanation: "4 aces out of 52 cards.", marks: 2 },
    { id: "q5", question: "Spinner 1-5: P(>3)?", answer: "2/5", explanation: "Numbers 4,5.", marks: 2 },
    { id: "q6", question: "Bag: 4 yellow, 6 green. Replace one: twice yellow?", answer: "4/10 × 4/10 = 4/25", explanation: "Events independent with replacement.", marks: 2 },
    { id: "q7", question: "P(sum=7) rolling 2 dice?", answer: "6/36", explanation: "6 combinations sum to 7.", marks: 2 },
    { id: "q8", question: "P(Heads OR Tails) coin?", answer: "1", explanation: "Always head or tail, so 1.", marks: 2 }
  ],
  "statistics": [
    { id: "q1", question: "Data: 5,8,6 → mean?", answer: "6.33", explanation: "Sum=19, divide by 3.", marks: 2 },
    { id: "q2", question: "Data: 4, 7, 5, 9 → median?", answer: "6", explanation: "Order: 4,5,7,9 → middle avg=(5+7)/2=6.", marks: 2 },
    { id: "q3", question: "Mode of 3,4,4,5?", answer: "4", explanation: "Number occuring most often.", marks: 2 },
    { id: "q4", question: "Range of 9,2,7,5?", answer: "7", explanation: "Max - min = 9-2 = 7.", marks: 2 },
    { id: "q5", question: "Mean of first 5 even numbers?", answer: "6", explanation: "Sum=2+4+6+8+10=30, ÷5=6.", marks: 2 },
    { id: "q6", question: "Tally: 3 cats, 2 dogs → total?", answer: "5", explanation: "3+2=5.", marks: 2 },
    { id: "q7", question: "Pie chart total degrees?", answer: "360", explanation: "A circle is 360°.", marks: 2 },
    { id: "q8", question: "Bar chart: tallest bar means?", answer: "Most frequent", explanation: "Bar height shows frequency.", marks: 2 }
  ],
  "ratio": [
    { id: "q1", question: "Divide £60 in ratio 2:1", answer: "£40 and £20", explanation: "2+1=3 parts, each £20.", marks: 2 },
    { id: "q2", question: "Simplify 20:25", answer: "4:5", explanation: "Divide both by 5.", marks: 2 },
    { id: "q3", question: "Orange juice to water ratio 3:2, 15L juice → water?", answer: "10", explanation: "1 part=5L, water=2 parts=10L.", marks: 2 },
    { id: "q4", question: "£72 split ratio 5:4 → smaller share?", answer: "£32", explanation: "Total parts=9, £72/9=8, smaller=4×8.", marks: 2 },
    { id: "q5", question: "Speed ratio 2:3, slow 40mph → fast?", answer: "60", explanation: "Multiply by 1.5.", marks: 2 },
    { id: "q6", question: "Scale 1:100 → 3cm = ?", answer: "3m", explanation: "100×3cm=300cm.", marks: 2 },
    { id: "q7", question: "Recipe 4 eggs for 8 people → 20 people?", answer: "10", explanation: "(20÷8)*4=10 eggs.", marks: 2 },
    { id: "q8", question: "Mix paint 2:5, 6L red → blue?", answer: "15", explanation: "1 part=3L, blue=5×3=15L.", marks: 2 }
  ],
  "fractions": [
    { id: "q1", question: "Add 1/2 + 1/4", answer: "3/4", explanation: "Common denom 4: 2/4+1/4.", marks: 2 },
    { id: "q2", question: "Subtract 2/3 - 1/6", answer: "1/2", explanation: "2/3=4/6, 4/6-1/6=3/6=1/2.", marks: 2 },
    { id: "q3", question: "Multiply 3/4 × 2/5", answer: "3/10", explanation: "Top×top=6, bottom×bottom=20 → simplify.", marks: 2 },
    { id: "q4", question: "Divide 3/5 ÷ 2/3", answer: "9/10", explanation: "Multiply by reciprocal 3/5 × 3/2.", marks: 2 },
    { id: "q5", question: "0.75 as fraction", answer: "3/4", explanation: "75/100→simplify.", marks: 2 },
    { id: "q6", question: "50% as fraction", answer: "1/2", explanation: "50/100 simplified.", marks: 2 },
    { id: "q7", question: "Increase 80 by 25%", answer: "100", explanation: "25% of 80=20, 80+20=100.", marks: 2 },
    { id: "q8", question: "Find 40% of 50", answer: "20", explanation: "0.4×50=20.", marks: 2 }
  ],
  "sequences": [
    { id: "q1", question: "Next in 2,4,6,8...", answer: "10", explanation: "+2 each step.", marks: 2 },
    { id: "q2", question: "Next in 5,10,20...", answer: "40", explanation: "×2 each step.", marks: 2 },
    { id: "q3", question: "Nth term of 3,6,9...", answer: "3n", explanation: "Multiply n by 3.", marks: 2 },
    { id: "q4", question: "Nth term of 2,5,8...", answer: "3n-1", explanation: "×n and adjust.", marks: 2 },
    { id: "q5", question: "Fibonacci: 0,1,1,2,3...", answer: "5", explanation: "Add previous two terms.", marks: 2 },
    { id: "q6", question: "Square numbers up to 25", answer: "1,4,9,16,25", explanation: "n×n pattern.", marks: 2 },
    { id: "q7", question: "Next in 100,90,80...", answer: "70", explanation: "Subtract 10.", marks: 2 },
    { id: "q8", question: "Nth term of 7,14,21...", answer: "7n", explanation: "Multiply by 7.", marks: 2 }
  ],
  "transformations": [
    { id: "q1", question: "Reflection line y-axis flips...", answer: "left-right", explanation: "Mirror over vertical axis.", marks: 2 },
    { id: "q2", question: "Rotate 90° clockwise about origin: (1,2) → ?", answer: "2,-1", explanation: "Swap and change y sign.", marks: 2 },
    { id: "q3", question: "Enlarge by scale factor 2 from origin: (3,4) → ?", answer: "6,8", explanation: "Multiply both coords by 2.", marks: 2 },
    { id: "q4", question: "Translate (2,3) by (4,-2)", answer: "6,1", explanation: "Add moves to coords.", marks: 2 },
    { id: "q5", question: "Reflect over x-axis: (5,-3) → ?", answer: "5,3", explanation: "Flip vertical position.", marks: 2 },
    { id: "q6", question: "Rotation 180°: (7,2) → ?", answer: "-7,-2", explanation: "Invert both coords.", marks: 2 },
    { id: "q7", question: "Enlarge by -1: (2,3) → ?", answer: "-2,-3", explanation: "Negative = opposite direction.", marks: 2 },
    { id: "q8", question: "Translate (0,0) by (-3,4)", answer: "-3,4", explanation: "Add vector to coords.", marks: 2 }
  ],
  "simultaneous": [
    { id: "q1", question: "Solve: x+y=10, x-y=4 → x?", answer: "7", explanation: "Add eqns: 2x=14, x=7.", marks: 2 },
    { id: "q2", question: "Solve: x+y=10, x-y=4 → y?", answer: "3", explanation: "x=7, then y=3.", marks: 2 },
    { id: "q3", question: "Solve: 2x+3y=12, x+y=4 → y?", answer: "0", explanation: "x=4, y=0.", marks: 2 },
    { id: "q4", question: "Solve: 3x-2y=4, x+y=5 → x?", answer: "14/5", explanation: "Substitution method.", marks: 2 },
    { id: "q5", question: "If x=2y, y=3 → x?", answer: "6", explanation: "Multiply 3×2.", marks: 2 },
    { id: "q6", question: "If y = (x-4)/2, y=5 → x?", answer: "14", explanation: "5=(x-4)/2, multiply by 2, add 4.", marks: 2 },
    { id: "q7", question: "Solve: x+y=8, 2x-y=4 → x?", answer: "4", explanation: "Add equations: 3x=12.", marks: 2 },
    { id: "q8", question: "Solve: x+y=8, 2x-y=4 → y?", answer: "4", explanation: "x=4, y=4.", marks: 2 }
  ],
  "inequalities": [
    { id: "q1", question: "Solve: x+3>5", answer: "x>2", explanation: "Subtract 3 from both sides.", marks: 2 },
    { id: "q2", question: "Solve: 2x≤6", answer: "x≤3", explanation: "Divide both sides by 2.", marks: 2 },
    { id: "q3", question: "Solve: x-5<0", answer: "x<5", explanation: "Add 5 to both sides.", marks: 2 },
    { id: "q4", question: "Solve: -x>4", answer: "x<-4", explanation: "Divide by -1, reverse inequality.", marks: 2 },
    { id: "q5", question: "Solve: 3x+2≥8", answer: "x≥2", explanation: "Subtract 2, divide by 3.", marks: 2 },
    { id: "q6", question: "Solve: 5≥2x+1", answer: "x≤2", explanation: "Subtract 1, divide by 2.", marks: 2 },
    { id: "q7", question: "Solve: 2x-7>1", answer: "x>4", explanation: "Add 7, divide by 2.", marks: 2 },
    { id: "q8", question: "Solve: 4≤3x", answer: "x≥4/3", explanation: "Divide by 3.", marks: 2 }
  ]
};

function generateAssignments(): Assignment[] {
  const assignments: Assignment[] = [];
  topics.forEach(topic => {
    const bank = questionBank[topic.id] || [];
    assignments.push({
      id: `${topic.id}-1`,
      title: `${topic.name} - Assignment 1`,
      description: `Practise ${topic.name} with a set of carefully selected problems.`,
      topicId: topic.id,
      difficulty: "Easy",
      dueDate: new Date(Date.now() + 86400000).toISOString(),
      exercises: bank
    });
  });
  return assignments;
}

export const assignments = generateAssignments();