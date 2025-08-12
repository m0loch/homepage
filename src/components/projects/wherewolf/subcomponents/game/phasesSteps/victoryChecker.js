export function VictoryChecker({ players, assignments, survivors, logs, winners }) {

    const updWinners = /*winners || */[];
    let isGameOver = false;

    const survivorsWithRoles = survivors.map(player => { return { player, role: assignments[player] } });

    // Werewolves win if there are no more players with Town faction among the survivors
    // Villagers win if they kill all the werewolves
    const werewolves = survivorsWithRoles.filter(player => player.role.faction === 'Werewolf');
    const villagers = survivorsWithRoles.filter(player => player.role.faction === 'Town');
    const traitor = Object.entries(assignments).find(([, value]) => value.name.eng === "The Traitor");

    if (werewolves.length === 0 && villagers.length > 0) {
        updWinners.push(...villagers.map(player => player.player));
        isGameOver = true;
    } else if (werewolves.length > 0 && villagers.length === 0) {
        updWinners.push(...werewolves.map(player => player.player));
        isGameOver = true;

        // Traitor wins if werewolves win
        if (traitor) {
            updWinners.push(traitor);
        }
    }

    // Jester wins if they are voted out

    // Madman wins if killed by the werewolves

    // Lovers win if they are both alive at the end of the game

    return {
        // Remove duplicates from winners
        winners: [...new Set(updWinners)],
        isGameOver,
    };
}