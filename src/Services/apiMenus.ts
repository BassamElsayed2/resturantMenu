import supabase from "./supabase";

export async function getMenus() {
  const { data, error } = await supabase.from("restaurants").select("*");

  if (error) {
    console.error("فشل في جلب القائمة:", error.message);
    throw new Error("فشل في تحميل القائمة");
  }

  return data;
}
