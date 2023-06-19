// eslint-disable-next-line prettier/prettier
import { oneOf } from 'vue-types'

export const statusType = () => oneOf(["available", "sold out", null] as const);

export class Nakada {
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
}

export class AnswerOption {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public optionText: string,
    public optionScore: number,
    public optionId: string
  ) {}
}

export class QuestionItem {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private _questionText: string,
    private _questionId: string,
    private _ansState: boolean,
    private _singleScore: number,
    private _answerOptions: AnswerOption[] = []
  ) {}

  get questionText() {
    return this._questionText;
  }

  set questionText(item: string) {
    this._questionText = item;
  }

  get questionId() {
    return this._questionId;
  }

  set questionId(item: string) {
    this._questionId = item;
  }

  get ansState() {
    return this._ansState;
  }

  set ansState(item: boolean) {
    this._ansState = item;
  }

  get singleScore() {
    return this._singleScore;
  }

  set singleScore(item: number) {
    this._singleScore = item;
  }

  get answerOptions() {
    return this._answerOptions;
  }

  set answerOptions(items: AnswerOption[]) {
    this._answerOptions = items;
  }

  addAnswerOption(item: [string, number, string]) {
    const newAnswerOption = new AnswerOption(item[0], item[1], item[2]);
    this._answerOptions.push(newAnswerOption);
  }
}

export class CategoryItem {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private _category: string = "",
    private _categoryId: string = "",
    private _categoryScore: number = 0,
    private _questionList: QuestionItem[] = []
  ) {}

  get category() {
    return this._category;
  }

  set category(item: string) {
    this._category = item;
  }

  get categoryId() {
    return this._categoryId;
  }

  set categoryId(item: string) {
    this._categoryId = item;
  }

  get categoryScore() {
    return this._categoryScore;
  }

  set categoryScore(item: number) {
    this._categoryScore = item;
  }

  get questionList() {
    return this._questionList;
  }

  set questionList(item: QuestionItem) {
    if (typeof item !== "undefined") {
      throw new TypeError("item is undefined");
    }
    this._questionList = item;
  }

  addQuestionItem(item: QuestionItem) {
    console.log(item);
    if (typeof item !== "undefined") {
      throw new TypeError("item is undefined XXX");
    }
    this._questionList.push(item);
  }
}

export class QaList {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private _qaTitle: string = "questions",
    private _totalScore: number = 0,
    private _categoryList: CategoryItem[] = []
  ) {}

  get qaTitle() {
    return this._qaTitle;
  }

  set qaTitle(item: string) {
    this._qaTitle = item;
  }

  get categoryList() {
    return this._categoryList;
  }

  set categoryList(item: CategoryItem[]) {
    if (typeof item !== "undefined") {
      throw new TypeError("item is undefined");
    }
    this._categoryList = item;
  }

  addCategoryList(item: CategoryItem) {
    if (typeof item !== "undefined") {
      throw new TypeError("item is undefined");
    }
    this._categoryList.push(item);
  }
}
