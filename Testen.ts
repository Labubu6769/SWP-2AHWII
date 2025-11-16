import { assertEquals } from "@std/assert";
import { Bruch } from "./Brüche_addieren.ts";

Deno.test("Addition natürliche Zahlen", ()  => {
    const b1 = Bruch.fromString("1");
    const b2 = Bruch.fromString("2");
    assertEquals(b1.addiere(b2).toString(), "3");
});



Deno.test("Addition gemischte Zahlen", ()  => {
    const b1 = Bruch.fromString("1 1/2");
    const b2 = Bruch.fromString("2 1/3");
    assertEquals(b1.addiere(b2).toString(), "3 2/5");
});



Deno.test("Subtraktion natürlicher Zahlen", () => {
    const b1 = Bruch.fromString("8");
    const b2 = Bruch.fromString("5");
    assertEquals(b1.subtrahiere(b2).toString(), "3");
});




Deno.test("Subtraktion gemischte Zahlen", () => {
    const b1 = Bruch.fromString("4 3/4");
    const b2 = Bruch.fromString("2 2/5");
    assertEquals(b1.subtrahiere(b2).toString(), "2 7/20");
});