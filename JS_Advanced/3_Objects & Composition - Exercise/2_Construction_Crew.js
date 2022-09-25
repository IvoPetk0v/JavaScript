function solve(worker) {
    if (worker.dizziness === true) {
        let water = worker.experience * worker.weight * 0.1
        worker.levelOfHydrated += water;
        worker.dizziness = false;
        return worker;
    } else {
        return worker;
    }
}

console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
console.log(solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
));
console.log(solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));