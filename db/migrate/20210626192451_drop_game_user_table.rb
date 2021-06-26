class DropGameUserTable < ActiveRecord::Migration[6.1]
  def up
    drop_table :games_users
  end
  def down
    raise ActiveRecord::IrreversibleMigration
  end
end

