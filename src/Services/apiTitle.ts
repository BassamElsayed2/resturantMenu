import supabase from "./supabase";

export async function getTitles() {
  const { data, error } = await supabase.from("description").select("*");

  if (error) {
    console.error("فشل في جلب العنوان:", error.message);
    throw new Error("فشل في تحميل العنوان");
  }

  return data;
}
