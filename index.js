function superbowlWin(record, result) {
   for (const team of record) {
    if (team.result === "W") {
        return team.year;
    }
   }
};

record.prototype.find(superbowlWin);