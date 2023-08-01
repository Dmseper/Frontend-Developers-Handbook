// ====== #1 - Readonly ====== //

interface User {
  name: string
}

const user: Readonly<User> = {
  name: "Ivan"
}

// user.name = '123' Error


// ====== #2 - Required ====== //

interface Props {
  a?: number
  b?: number
}

const obj1: Props = {a: 5}

// const obj2: Required<Props> = {a: 5} Error

// ====== #3 - Partial ====== //

interface Props {
  a: number
  b: number
}

const obj2: Partial<Props> = {a: 5}

// ====== #4 - Record ====== //

interface PageInfo {
  title: string
}

type Page = "home" | "about" | "contact"

const guidePages: Record<Page, PageInfo> = {
  about: {title: 'about'},
  contact: {title: 'contact'},
  home: {title: 'home'},
}


// ====== #5 - Pick ====== //

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview1 = Pick<Todo, "title" | "completed">;

const todo1: TodoPreview1 = {
  title: "Clean room",
  completed: false,
};

// ====== #6 - Omit ====== //


type TodoPreview2 = Omit<Todo, "description">;

const todo2: TodoPreview2 = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};


// ====== #7 - Exclude ====== //

type T0 = Exclude<"a" | "b" | "c", "a">; // b | c
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // c
type T2 = Exclude<string | number | (() => void), Function>; // string | number


type Shape1 =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T3 = Exclude<Shape1, { kind: "circle" }> // { kind: "square"; x: number } | { kind: "triangle"; x: number; y: number };


// ====== #8 - Extract ====== //

type T4 = Extract<"a" | "b" | "c", "a" | "f">; // a
type T5 = Extract<string | number | (() => void), Function>; // () => void

type Shape2 =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T6 = Extract<Shape2, { kind: "circle" }> // { kind: "circle"; radius: number }


// ====== #9 - NonNullable ====== //

type T7 = NonNullable<string | number | undefined>; // string | number
type T8 = NonNullable<string[] | null | undefined>; // string []


// ====== #10 - Awaited ====== //

type A = Awaited<Promise<string>>; // string
type B = Awaited<Promise<Promise<number>>>; // number
type C = Awaited<boolean | Promise<number>>; //number | boolean


// ====== #11 - Parameters ====== //

declare function f1(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>; //type T0 = []
type T1 = Parameters<(s: string) => void>; //type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>; //type T2 = [arg: unknown]
type T3 = Parameters<typeof f1>; //type T3 = [arg: { a: number; b: string;}]

// ====== #12 - ThisParameterType ====== //
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

// ====== #13 - InstanceType ====== //
//Конструирует тип, состоящий из типа экземпляра функции-конструктора в Type
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>; // type T0 = C
type T1 = InstanceType<any>; // type T1 = any
type T2 = InstanceType<never>; // type T2 = never
type T3 = InstanceType<string>; // Error
type T4 = InstanceType<Function>; //Error


// ====== #14 - ReturnType ====== //
// Конструирует тип, состоящий из возвращаемого типа функции .Type
declare function f2(): { a: number; b: string };

type T0 = ReturnType<() => string>; // type T0 = string
type T1 = ReturnType<(s: string) => void>; // type T1 = void
type T2 = ReturnType<<T>() => T>; // type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>; // type T3 = number[]
type T4 = ReturnType<typeof f2>; // type T4 = {a: number;b: string;}
type T5 = ReturnType<any>; // type T5 = any
type T6 = ReturnType<never>; // type T6 = never
type T7 = ReturnType<string>;// Error
type T8 = ReturnType<Function>; // Error


// ====== #15 - ConstructorParameters ====== //
// ====== #16 - OmitThisParameter ====== //
// ====== #17 - ThisType ====== //


