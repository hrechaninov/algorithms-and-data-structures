export default class HashTable{
    constructor(size = 32){
        this.buckets = this.initBuckets(size);
    }
    initBuckets(size){
        const buckets = [];
        for(let i = 0; i < size; i++){
            buckets.push([]);
        }
        return buckets;
    }
    hash(key = ""){
        if( typeof key !== "string") throw new Error("Key argument has to be a string");

        let accumulator = 0;
        for(let i = 0; i < key.length; i++){
            accumulator += key.charCodeAt(i);
        }
        return accumulator % this.buckets.length;
    }
    set(key, value){
        const hash = this.hash(key);
        const bucket = this.buckets[hash];
        const bucketEntryWithKey = bucket.find(entry => entry.key === key);

        if(bucketEntryWithKey){
            bucketEntryWithKey.value = value;
            return;
        }
        bucket.push({key, value});
    }
    get(key){
        const hash = this.hash(key);
        const bucket = this.buckets[hash];
        const bucketEntryWithKey = bucket.find(entry => entry.key === key);

        if(bucketEntryWithKey) return bucketEntryWithKey.value;
        return undefined;
    }
}