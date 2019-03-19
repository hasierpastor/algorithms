var canAttendMeetings = function(intervals) {
  let sortedIntervals = intervals.sort((a, b) => {
    if (a.start > b.start) return 1;
    if (a.start < b.start) return -1;
    if (a.start === b.start) return 0;
  });
  console.log(sortedIntervals);
  for (let i = 0; i < sortedIntervals.length - 1; i++) {
    if (sortedIntervals[i].end > sortedIntervals[i + 1].start) {
      return false;
    }
  }
  return true;
};
