import test from "ava";
import reverser from "../src/index.js";

test("Reverse", t => {
  t.is(reverser("hello"), "olleh", "These strings do not match");
  t.is(reverser("goodbye"), "eybdoog");
});
