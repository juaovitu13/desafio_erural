from pydantic import BaseModel

class Sala(BaseModel):     
    videos = []
    nome: str
    
    def add_video(self, video):
        self.videos.append(video)
    