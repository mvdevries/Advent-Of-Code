using System;
using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;
using Solutions.Days;
using Xunit;

namespace Solutions.XTests.Days;

public class UnitTest04: IAsyncLifetime
{
    private readonly Day04 _day = new();
    private string? _input;

    private const string handInput =
@"2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8";

    public async Task InitializeAsync()
    {
        _input = await File.ReadAllTextAsync("./Inputs/Day04.txt");
    }

    public Task DisposeAsync()
    {
        return Task.CompletedTask;
    }

    [Fact]
    public void HandTestPart1()
    {
        var answer = _day.Part1(handInput);
        Console.WriteLine(answer);
        Assert.Equal(2, answer);
    }

    [Fact]
    public void Part1()
    {
        var answer = _day.Part1(_input!);
        Console.WriteLine(answer);
        Assert.Equal(605, answer);
    }

    [Fact]
    public void HandTestPart2()
    {
        var answer = _day.Part2(handInput);
        Console.WriteLine(answer);
        Assert.Equal(4, answer);
    }

    [Fact]
    public void Part2()
    {
        var answer = _day.Part2(_input!);
        Console.WriteLine(answer);
        Assert.Equal(914, answer);
    }
}
