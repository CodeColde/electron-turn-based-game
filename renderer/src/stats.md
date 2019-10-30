# Character Stats

## Stat Descriptions

### HP

The health a character / enemy has. Any attack ends up affecting this stat as a consequence.

### Attack

Strikes the user, with damage taking into account the enemy's defense.

### Magic

Strikes the user, with damage taking into account the enemy's magic resistance (MR)

### Defense

Defends the user from Attack moves. The higher the defense, the less hp a user loses from Attack moves.

### Magic Resistance

Defends the user from Magic moves. The higher the MR, the less hp a user loses from Magic moves.

### Speed

Decides the turn order. If the user's speed is higher than the target, the user goes first, and vice versa.

## Damage calculations

u = Character executing a move
t = Target receiving the move
L = Level
P = Move's flat power stat
A = Attack
M = Magic
D = Defense
MR = Magic Resistance
HP = health points
R = Resistance
W = Weakness

### Damage Resistances

Dwarf > Gnome
Gnome > Human
Human > Dwarf

### Flat Values

Crit = 1.25
Resistance = 0.5
Weakness = 2
Type = (Resistance or Weakness)
RNG = number between 0.9 and 1
Level = (2 x Lu) / 5 + 2
Flat = 45
NewFlat = 2

### Attack-based

Impact = Au / Dt

### Magic-based

Impact = Mu / MRt

### Damage

Damage = ((Level x Impact x Power) / Flat) + NewFlat x (Crit x Type x RNG)

### Extra Info

#### Why the added numbers?

The numbers are imperative to ensure a fair damage calculations, and are the consistencies that can be tweaked to achieve a fairer combat balance.

Modifiers such as Critical Strikes, a Random Generated Number, and Type considerations adjust the end value slightly.

Using the level as a flat amplifier is dangerous as it causes large numbers, especially when multiplying moves by their flat power.

Some flat numbers, such as a divider helps keep the numbers overseeable. A lot of the time you end up seeing HPs of 1 million, and moves do 40 thousand damage or something. Sometimes it can be a lot, so to keep it somewhat low we add the Flat. The NewFlat is to add just a touch of power back to the loss from the flat division. Eventually, the result is dependant on how I want the HP stat to look.

To put it simply, Flat has the largest impact, and NewFlat the smallest, so for balance effects, those values can be tweaked.
