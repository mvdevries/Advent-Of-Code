using Solutions.Base;
using Solutions.Extensions;

namespace Solutions.Days;

public class Day06 : IDay<int>
{
    private static readonly (int x, int y)[] Directions4WaysPlus =
    [
        (0, -1),
        (1, 0),
        (0, 1),
        (-1, 0),
    ];

    private static bool IsOffGrid(char[][] grid, int x, int y)
    {
        return y < 0 || y >= grid.Length || x < 0 || x >= grid[y].Length;
    }

    private static bool GridIsEqual(char[][] grid, int x, int y, char character)
    {
        return grid[y][x] == character;
    }

    private static char[][] ParseInput(string input)
    {
        var lines = input.SplitOnLines(removeEmpty: true);
        return lines.Select(l => l.ToArray()).ToArray();
    }

    private static (int x, int y) FindPosition(char[][] grid, char character)
    {
        for (var y = 0; y < grid.Length; y++)
        {
            for (var x = 0; x < grid[y].Length; x++)
            {
                if (grid[y][x] == character)
                {
                    return (x, y);
                }
            }
        }

        return (-1, -1);
    }

    private List<(int x, int y)> GetPath(char[][] grid, (int x, int y) startPosition, int direction)
    {
        var x = startPosition.x;
        var y = startPosition.y;
        var path = new List<(int x, int y)>();

        while (true)
        {
            var nextX = x + Directions4WaysPlus[direction].x;
            var nextY = y + Directions4WaysPlus[direction].y;

            if (IsOffGrid(grid, nextX, nextY))
            {
                break;
            }

            var nextChar = grid[nextY][nextX];
            if (GridIsEqual(grid, nextX, nextY, '.') || GridIsEqual(grid, nextX, nextY, '^'))
            {
                x = nextX;
                y = nextY;
                path.Add((x, y));
                continue;
            }

            if (GridIsEqual(grid, nextX, nextY, '#'))
            {
                direction = (direction + 1) % 4;
            }
        }

        return path;
    }

    public int Part1(string input)
    {
        var grid = ParseInput(input);
        var guardDirection = 0;
        var guardStartPosition = FindPosition(grid, '^');

        return GetPath(grid, guardStartPosition, guardDirection).ToHashSet().Count;
    }

    public int Part2(string input)
    {
        var grid = ParseInput(input);

        return 0;
    }
}