export type EntriesRouteParams = {
    ProjectEntries: { projectId: string },
    TagEntries: { tagId: string },
    DayEntries: { dayDate: string },
    WeekEntries: { week: number, year: number },
    MonthEntries: { month: number, year: number },
};
