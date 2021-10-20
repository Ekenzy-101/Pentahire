import { http } from "./http";
import { Vehicle } from "src/utils/types";

export async function getVehicle(id: string) {
  const { data } = await http.get(`/vehicles/${id}`);
  return data as { vehicle: Vehicle };
}
