import { mockUsers } from "../data/mockData";

export function startDemoSession() {
  localStorage.setItem("mockUser", JSON.stringify(mockUsers[0]));
}
