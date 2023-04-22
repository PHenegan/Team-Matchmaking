# Software and Database Design
This directory contains documents in which I planned out the database and backend code for the project. the ER Diagram pdf contains a Entity-Relationship 
diagram which could then be converted into a SQL database (I had planned to use MySQL).

The backend design PDF contains a rough layout of the classes and object types that would be implemented in TypeScript in the backend portion of the code. 
These classes would be constructed using data from the database in conjunction with a REST API in order to make the code as modular as possible.

## The "algorithm"

The main focus of the project is the matchmaking algorithm, which I will describe in detail here. The approach would use a greedy algorithm,
starting with a list of students.

This list of students would first be sorted, either based on the student with the most schedule availability, or the most confident skills 
(probably with an option to switch between the two on the professor's screen).

Then, blank groups would be created based on the number of students in the class, and the desired group size.

Now, each student will be iteratively added to one of the existing groups. 
They will be added to the group based on which group (with a size under the max size) will benefit the most from that student, based on a "score" calculated for that group. 
If any of the isolation criteria are violated, then they will not be added to that group. If it is not possible to add a student to any group based on the criteria,
then an error message will be displayed to the professor, and the professor can update their group making preferences.

If number of students does not evenly divide into the group sizes, then a number of groups will have an additional student placed in.

## Group Scoring

Groups will be scored using the 3 main categories described by GroupGenie - schedule availability, personality archetype, and skillsets.

The group will have scores in all 3 categories, though they will each be normalized to weight the same amount when calculating an overall score.
The scores will be calculated by category as follows:

- The schedule availability score will be calculated based on how many hours a group can meet. 
  - That is, if all group members' schedules were overlapped, how many hours would they be able to meet each week?
  - This would also be normalized based on the number of hours in a week. This would allow the score to be given as a decimal value between 0 and 1 (or, more visually appealing, as a percentage between 0 and 100)
- The personality score would be calculated by how many members share a skill. This score would go down as the number of archetypes goes up, and would go up when a group shares a similar personality archetypes
  - This would be calculated as `min(# of groupmates with a given archetype, 0)` for any given archetype, and then summed as a whole to create a composite score.
  - This can be normalized by dividing by `(# of groupmates - 1) * (number of archetypes students can pick)` - in this case, the latter number would be 2.
- The skillsets score would be calculated as the number of listed skills that the group as a whole possesses. This can easily be normalized based on the total number of skills.
