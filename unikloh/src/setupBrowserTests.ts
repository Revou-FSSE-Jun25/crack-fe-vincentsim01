import { worker } from "./__mocks__/browser";

beforeAll(() => worker.start());
afterAll(() => worker.stop());