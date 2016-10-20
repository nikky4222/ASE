import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.json.JSONException;
import org.json.JSONObject;

@Path("/nib")

public class nibbles {

	@Path("{f}")
	  @GET
	  @Produces("application/json")
	  public Response convertBytoBiInput(@PathParam("f") int b) throws JSONException {
		  
			JSONObject jsonObject = new JSONObject();
			 int nib;
				nib=b*2;
				
				jsonObject.put("byte value", b); 
				jsonObject.put("nibble value", nib);
			String result = "@Produces(\"application/json\") Output: \n\nBytes to Nibbles Converter Output: \n\n" + jsonObject;
			return Response.status(200).entity(result).build();
		  }
	
	
}
