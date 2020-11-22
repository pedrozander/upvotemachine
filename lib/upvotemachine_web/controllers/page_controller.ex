defmodule UpvotemachineWeb.PageController do
  use UpvotemachineWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
