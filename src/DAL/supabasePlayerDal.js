import supabase from "../../DB/playersDB.js";

async function readPlayers() {
    const {data, error} = await supabase
    .from('players')
    .select('*');
    if (error) throw new Error(error.message);
    return data;
};

async function readById(id){
    const {data, error} = await supabase
    .from('players')
    .select()
    .eq('id', id);
    if (error) throw new Error(error.message);
    return data;
};

async function readByName(name){
    const {data, error} = await supabase
    .from('players')
    .select()
    .eq('name', name);
    if (error) throw new Error(error.message);
    return data;
};

async function getTopRecord(){
    const {data, error} = await supabase
    .from('players')
    .select('*')
    .order('record', {ascending : true})
    .limit(1);
    if (error) throw new Error(error.message);
    return data;
};

async function createPlayer(Obj){
    const {data, error} = await supabase
    .from('players')
    .insert(Obj)
    .select();
    if(error) throw new Error(error.message);
    return data;
};

async function updatePlayer(filterObj, updateObj) {
    const {data, error} = await supabase
    .from('players')
    .update({[updateObj.key] : updateObj.value})
    .eq('id', filterObj.id)
    .select();
    if(error) throw new Error(error.message);
    return data;
};

async function deletePlayer(id){
    const {data, error} = await supabase
    .from('players')
    .delete()
    .eq('id', id)
    .select('id');
    if(error) throw new Error(error.message);
    return data;
};

export default {readPlayers, readByName, getTopRecord, createPlayer, updatePlayer, deletePlayer}