
import PaidPost from './paid-post.js';

class Magazine extends PaidPost {
    topic;

    constructor(name, price, topic) {
        super(name, price);
        this.topic = topic;
    }

    get summary() {
        return `${this.name} publication number ${this.publicationNumber} of ${this.topic}`;
    }

    get publicationNumber() {
        return super.summary.match(/number (\d+)/)?.[1] ?? 0;
    }
}

export { Magazine };
export default Magazine;
