<script setup lang="ts">
import ProductList from "../components/ProductList.vue";
import { AnswerOption, CategoryItem, QaList, QuestionItem } from "~/types";

const list = [
  {
    id: 1,
    description: "Item 1",
    price: 1.5,
  },
  {
    id: 2,
    description: "Item 2",
    price: 20.0,
  },
  {
    id: 3,
    description: "Item 3",
    price: 1.99,
  },
  {
    id: 4,
    description: "Item 4",
    price: 0,
    status: "sold out",
  },
];

const myCategory1 = new CategoryItem("type a", "a1", 25, []);
const myCategory2 = new CategoryItem("type b", "b1", 20);

myCategory1.addQuestionItem(
  new QuestionItem("this is question a1", "a1-01", false, 0, [
    new AnswerOption("this is choice a1-01-option1", 0, "a1-01-option1"),
    new AnswerOption("this is choice a1-01-option2", 1, "a1-01-option2"),
    new AnswerOption("this is choice a1-01-option3", 2, "a1-01-option3"),
    new AnswerOption("this is choice a1-01-option4", 3, "a1-01-option4"),
    new AnswerOption("this is choice a1-01-option5", 4, "a1-01-option5"),
  ])
);

myCategory1.addQuestionItem(
  new QuestionItem("this is question a2", "a1-02", false, 0, [
    new AnswerOption("this is choice a1-02-option1", 0, "a1-02-option1"),
    new AnswerOption("this is choice a1-02-option2", 1, "a1-02-option2"),
    new AnswerOption("this is choice a1-02-option3", 2, "a1-02-option3"),
    new AnswerOption("this is choice a1-02-option4", 3, "a1-02-option4"),
    new AnswerOption("this is choice a1-02-option5", 4, "a1-02-option5"),
  ])
);
myCategory1.addQuestionItem(
  new QuestionItem("this is question a2", "a1-03", false, 0, [
    new AnswerOption("this is choice a1-03-option1", 0, "a1-03-option1"),
    new AnswerOption("this is choice a1-03-option2", 1, "a1-03-option2"),
    new AnswerOption("this is choice a1-03-option3", 2, "a1-03-option3"),
    new AnswerOption("this is choice a1-03-option4", 3, "a1-03-option4"),
    new AnswerOption("this is choice a1-03-option5", 4, "a1-03-option5"),
  ])
);

myCategory2.addQuestionItem(
  new QuestionItem("this is question b1", "b1-01", false, 0, [
    new AnswerOption("this is choice b1-01-option1", 0, "b1-01-option1"),
    new AnswerOption("this is choice b1-01-option2", 1, "b1-01-option2"),
    new AnswerOption("this is choice b1-01-option3", 2, "b1-01-option3"),
    new AnswerOption("this is choice b1-01-option4", 3, "b1-01-option4"),
    new AnswerOption("this is choice b1-01-option5", 4, "b1-01-option5"),
  ])
);
myCategory2.addQuestionItem(
  new QuestionItem("this is question a2", "b1-02", false, 0, [
    new AnswerOption("this is choice b1-02-option1", 0, "b1-02-option1"),
    new AnswerOption("this is choice b1-02-option2", 1, "b1-02-option2"),
    new AnswerOption("this is choice b1-02-option3", 2, "b1-02-option3"),
    new AnswerOption("this is choice b1-02-option4", 3, "b1-02-option4"),
    new AnswerOption("this is choice b1-02-option5", 4, "b1-02-option5"),
  ])
);
myCategory2.addQuestionItem(
  new QuestionItem("this is question a2", "b1-03", false, 0, [
    new AnswerOption("this is choice b1-03-option1", 0, "b1-03-option1"),
    new AnswerOption("this is choice b1-03-option2", 1, "b1-03-option2"),
    new AnswerOption("this is choice b1-03-option3", 2, "b1-03-option3"),
    new AnswerOption("this is choice b1-03-option4", 3, "b1-03-option4"),
    new AnswerOption("this is choice b1-03-option5", 4, "b1-03-option5"),
  ])
);

// const questionList = new CategoryList();
const qaList = new QaList();
qaList.addCategoryList(myCategory1);
qaList.addCategoryList(myCategory2);
</script>

<template>
  <div id="app">
    <NuxtLink to="/"> Top </NuxtLink>
    <product-list :list="list" :qa-list="qaList" />
  </div>
</template>
