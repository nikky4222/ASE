import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.json.JSONException;
import org.json.JSONObject;


@Path("/bytes")

public class Bytes {
	
	@Path("{f}")
	  @GET
	  @Produces("application/json")
	  public Response convertBytoBiInput(@PathParam("f") int b) throws JSONException {
		  
			JSONObject jsonObject = new JSONObject();
			 int bits,nib;
				double kb;

				bits=b*8;
				nib=b*2;
				kb=(b*0.001);
				
		    	jsonObject.put("byte", b); 
				jsonObject.put("nibble", nib);
				jsonObject.put("bits", bits);
				jsonObject.put("kilo", kb);
			String result = "" + jsonObject;
			return Response.status(200).entity(result).build();
		  }
	
}
