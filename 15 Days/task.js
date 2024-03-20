class Statistics {
    constructor() {
        this.ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
    }

    count() {
        return this.ages.length;
    }

    sum() {
        let sum = 0;
        for (let i = 0; i < this.ages.length; i++) {
            sum += this.ages[i];
        }
        return sum;
    }

    min() {
        return Math.min(...this.ages);
    }

    max() {
        return Math.max(...this.ages);
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return this.sum() / this.count();
    }

    median() {
        const sortedAges = this.ages.slice().sort((a,b) => a-b)
        const middle = Math.floor(sortedAges.length / 2);

        if (sortedAges.length / 2 === 0) {
            return (sortedAges[middle - 1] + sortedAges[middle]) / 2;
        }
        else {
            return sortedAges[middle];
        }
    }

    mode() {
        const frequencyMap = {};
        this.ages.forEach(age => {
            frequencyMap[age] = frequencyMap[age] ? frequencyMap[age] + 1 : 1;
        });

        let maxFrequency = 0;
        let modes = [];

        for (const age in frequencyMap) {
            if (frequencyMap[age] > maxFrequency) {
                modes = [parseInt(age)];
                maxFrequency = frequencyMap[age];
            } else if (frequencyMap[age] === maxFrequency) {
                modes.push(parseInt(age));
            }
        }

        return { mode: modes[0], count: maxFrequency };
    }

    freqDist() {
        const frequencyMap = {};
        this.ages.forEach(age => {
            frequencyMap[age] = frequencyMap[age] ? frequencyMap[age] + 1 : 1;
        });

        const freqDist = Object.entries(frequencyMap).map(([age, count]) => [count, parseInt(age)]);
        return freqDist.sort((a, b) => b[0] - a[0]);
    }
}
const statistics = new Statistics()

console.log('Count:', statistics.count()) 
console.log('Sum: ', statistics.sum()) 
console.log('Min: ', statistics.min()) 
console.log('Max: ', statistics.max()) 
console.log('Range: ', statistics.range())
console.log('Mean: ', statistics.mean()) 
console.log('Median: ',statistics.median()) 
console.log('Mode: ', statistics.mode()) 
console.log('Frequency Distribution: ',statistics.freqDist()) 
