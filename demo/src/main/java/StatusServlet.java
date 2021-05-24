import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.*;

@WebServlet(name = "statusServlet", value = "/status")
public class StatusServlet extends HttpServlet {
    private static final String announce = "It works";

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h3 style = 'color: green'>" + announce + "</h3>");
        out.println("</body></html>");
    }
}
