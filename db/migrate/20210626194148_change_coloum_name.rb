class ChangeColoumName < ActiveRecord::Migration[6.1]
  def change
    rename_column :comments, :games_id, :game_id
  end
end
