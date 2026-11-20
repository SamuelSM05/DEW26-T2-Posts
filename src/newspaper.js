
import PaidPost from './paid-post.js';

class Newspaper extends PaidPost {
    district;

    constructor(name, price, district) {
        super(name, price);
        this.district = district;
    }

    get summary() {
        return `${this.name} publication number ${this.publicationNumber} of ${this.district}`;
    }

    get publicationNumber() {
        return super.summary.match(/number (\d+)/)?.[1] ?? 0;
    }
}

export { Newspaper };
export default Newspaper;
