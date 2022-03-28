const toArray = obj => Object.keys(obj).map(key => obj[key]);

const summarize = numbers => toArray(numbers.reduce(summarizeFn, {}));

const summarizeFn = function(summary, num) {
summary[num] = summary[num]
    ? { num, count: summary[num].count + 1 }
    : { num, count: 1 }
return summary;
};

const findMode = summary => summary.reduce(findModeFn, 0);

const findModeFn = (max, { count }) => count > max ? count : max;

const filterMode = (summary, mode) => summary.filter(({ count }) => count == mode);

const getValues = items => items.map(({ num }) => num);

const mode = function(numbers) {
    const summary = summarize(numbers);
    const mode = findMode(summary);
    const modeItems = filterMode(summary, mode);
    return modeItems.length == summary.length ? [] : getValues(modeItems);
}