import static org.junit.Assert.assertEquals;

import org.junit.Test;
	
public class Btest {
	


		Bytesss b= new Bytesss();
	
        int sum1= b.calnib(4);
        int testsum1=8;

		@Test
		public void testSum() {
			System.out.println("@Test calnib(): " + sum1+ " = " +testsum1);
			assertEquals(sum1,testsum1);
		}

		
		
	}



