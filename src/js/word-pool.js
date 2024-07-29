const commonWords = [
    "the", "and", "for", "are", "with", "you", "was", "this", "that", "have",
    "from", "but", "not", "his", "her", "can", "will", "your", "what", "when",
    "then", "some", "about", "which", "they", "were", "like", "just", "more", "time",
    "know", "over", "back", "only", "such", "good", "most", "into", "very", "our",
    "there", "then", "only", "come", "being", "life", "each", "year", "give", "find",
    "make", "work", "take", "need", "know", "keep", "show", "home", "life", "name",
    "large", "place", "point", "could", "start", "means", "might", "under", "house",
    "water", "child", "other", "first", "found", "table", "world", "these", "right",
    "think", "small", "money", "group", "great", "place", "state", "house", "never",
    "happy", "story", "always", "again", "great", "school", "family", "people", "thing",
    "friend", "mother", "father", "little", "people", "number", "without", "another",
    "problem", "service", "outside", "computer", "sometimes", "something", "between",
    "everything", "different"
];


export default function getRandomWord(){
    let n = commonWords.length;
    let randomIndex = Math.floor(Math.random() * n + 1);
    return commonWords[randomIndex];
}