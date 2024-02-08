export async function GET(){
    const user = await Users.find();
    return Responde.json(user)await 
}