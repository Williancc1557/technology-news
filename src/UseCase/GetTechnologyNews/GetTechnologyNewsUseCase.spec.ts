import supertest from "supertest";
import { app } from "../../app";

jest.setTimeout(20000);

describe("Get technology router tests", () => {
    it("Must test technology router with null header if return array", async () => {
        const { body } = await supertest(app).get("/");

        expect(typeof body).toBe("object");
    });

    it("Must test if the router ran successfully with the headers implemented ", async () => {
        const { body } = await supertest(app).get("/").set({
            requestsNumber: 3,
        });
        expect(body.length).toBe(3);
    });

    it("Must test return error", async () => {
        const { statusCode } = await supertest(app).get("/").set({
            requestsNumber: 20,
        });
        expect(statusCode).toBe(400);
    });
});