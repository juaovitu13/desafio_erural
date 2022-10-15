from pydantic import BaseModel

class Video(BaseModel):   
    id: str
    nome : str
    link : str
