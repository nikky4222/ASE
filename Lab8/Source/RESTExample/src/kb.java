import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.json.JSONException;
import org.json.JSONObject;

@Path("/kb")
public class kb {
	@Path("{f}")
	  @GET
	  @Produces("application/json")
	  public Response convertBytoBiInput(@PathParam("f") int b) throws JSONException {
		  
			JSONObject jsonObject = new JSONObject();
			 double kbb;
				kbb=(b*0.001);
				jsonObject.put("byte value", b); 
				jsonObject.put("kilobyte value", kbb);
			String result = "@Produces(\"application/json\") Output: \n\nBytes to kilobytes Converter Output: \n\n" + jsonObject;
			return Response.status(200).entity(result).build();
		  }

}
