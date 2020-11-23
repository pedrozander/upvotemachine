defmodule UpvotemachineWeb.UpvotesChannel do
  use UpvotemachineWeb, :channel

  @impl true
  def join("upvotes:lobby", _payload, socket) do
    {:ok, socket}
  end

  @impl true
  def handle_in("shout", payload, socket) do
    broadcast socket, "shout", payload
    {:noreply, socket}
  end
end
