#region Models
from pydantic import BaseModel

videos = []

class Video(BaseModel):   
    id: str
    nome : str
    link : str

class Sala(BaseModel):    
    id: str
    nome: str
        
    def add_video(self, video):
        self.videos.append(video)
#endregion

#region WEB API
from fastapi import FastAPI

app = FastAPI()

#CRUD de salas
#Create
@app.post("/salas")
def criar_sala(sala: Sala):
    #Lógica para cadastrar uma sala 
    videos.append(sala)    
    return {"message": "Sala cadastrada com sucesso!",
            "Dados da sala": {
                "Id": sala.id,
                "Nome": sala.nome
            }}
    #return sala

#Read -> Sala específica pelo id
@app.get("/salas/id")
def obter_sala_pelo_id(id: str):
    #Lógica para consultar uma sala
    for sala in videos:
        if (videos == id):    
         return videos[i]#{"message": "Retornar informação da sala de id: " + id}
    return{"Status": 404, "Mensagem": "Sala não encontrada"}

#Read -> Todas as salas
@app.get("/salas")
def obter_salas():
    #Lógica para consultar uma sala    
    return videos#{f"message": "Retornar informação das salas cadastradas"}
    
#Update
@app.put("/salas")
def atualizar_sala(sala: Sala):
    
    #Lógica para atualizar uma sala 
    return {"message": "Sala atualizada com sucesso!",
            "Dados da sala": {
                "Id": sala.id,
                "Nome": sala.nome
            }}

#Delete
@app.delete("/salas/id")
def deletar_sala(id: str):
    
    #Lógica para deletar uma sala 
    for i in range(len(videos)):            
        if videos[i][0] == id:
            del videos[i]
            return {"message": "Sala de id: " + id + " excluída com sucesso!"}

#endregion
