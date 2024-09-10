import { Router } from "express";

const errorRouter = Router();


// Error handling
errorRouter.get("*", (req, res) => {
    res.json("404: Path could not be found! COULD NOT {GET}");
    res.status(404);
});
  
errorRouter.post("*", (req, res) => {
    res.json("404: Path could not be found! COULD NOT {POST}");
    res.status(404);
});
  
errorRouter.put("*", (req, res) => {
    res.json("404: Path could not be found! COULD NOT {PUT}");
    res.status(404);
});
  
errorRouter.delete("*", (req, res) => {
res.json("404: Path could not be found! COULD NOT {DELETE}");
    res.status(404);
});
  
export default errorRouter;