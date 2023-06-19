// eslint-disable-next-line prettier/prettier
import { oneOf } from 'vue-types'

export const statusType = () => oneOf(["available", "sold out", null] as const);
