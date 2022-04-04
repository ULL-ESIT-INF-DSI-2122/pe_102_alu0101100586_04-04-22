import 'mocha';
import { expect } from 'chai';
import { Sort_Strategy } from '../src/context/sort';
import { Bubble_Sort } from '../src/algorithm/bubble';
import { Merge_Sort } from '../src/algorithm/merge';

let data: number[] = [9, 8, 7, 5, 4, 6, 2, 1, 3];
let data_sort:  number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let test = new Sort_Strategy(data, new Bubble_Sort());

describe("Sort using  Strategy", () => {
    it("Instance of Sort Strategy", () => {
        expect(test).to.be.instanceOf(Sort_Strategy);
    });

    it("Get and Set Data", () => {
        test.setData([0]);
        expect(test.getData()).to.eql([0]);
        test.setData(data);
    });

    it("Bubble Sort", () => {
        test.logic();
        expect(test.getData()).to.be.eql(data_sort);
    });

    it("Merge Sort", () => {
        test.setData(data);
        test.setStrategy(new Merge_Sort);
        test.logic();
        expect(test.getData()).to.be.eql(data_sort);
    });
});